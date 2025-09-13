import { useAccount, useBalance, useChainId, useSwitchChain } from 'wagmi';
import { mainnet } from 'wagmi/chains';

export function useWallet() {
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address,
    chainId: mainnet.id,
  });

  const formatBalance = (decimals = 4) => {
    if (!balance) return '0';
    const value = parseFloat(balance.formatted);
    return value.toFixed(decimals);
  };

  const switchToMainnet = () => {
    if (chainId !== mainnet.id) {
      switchChain({ chainId: mainnet.id });
    }
  };

  return {
    address,
    isConnected,
    isConnecting,
    isDisconnected,
    balance: balance?.formatted,
    balanceSymbol: balance?.symbol,
    formatBalance,
    chainId,
    switchToMainnet,
    isBalanceLoading,
  };
}