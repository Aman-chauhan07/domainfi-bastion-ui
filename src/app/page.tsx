'use client';

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useAccount } from "wagmi";

const stats = [
  {
    name: "Total Portfolio Value",
    value: "$24,531.00",
    change: "+12.34%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    name: "Active Investments",
    value: "47",
    change: "+3",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    name: "Circle Members",
    value: "1,284",
    change: "+24",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    name: "Monthly Returns",
    value: "8.2%",
    change: "-0.4%",
    changeType: "negative" as const,
    icon: Activity,
  },
];

const recentActivity = [
  {
    id: 1,
    type: "investment",
    description: "Purchased domain: crypto-tokens.eth",
    amount: "$2,400",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "auction",
    description: "Won auction for defi-protocol.com",
    amount: "$5,200",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "lending",
    description: "Lent ETH to Circle Alpha",
    amount: "$3,100",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "return",
    description: "Received returns from web3-domains.eth",
    amount: "$890",
    time: "2 days ago",
  },
];

export default function HomePage() {
  const { isConnected } = useAccount();

  return (
    <Layout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">
              {isConnected 
                ? `Welcome back! Here's your portfolio overview.`
                : "Connect your wallet to access your portfolio."}
            </p>
          </div>
          {isConnected && (
            <div className="flex items-center space-x-2">
              <Button>Invest Now</Button>
              <Button variant="outline">View Portfolio</Button>
            </div>
          )}
        </div>

        {!isConnected ? (
          /* Not Connected State */
          <Card className="col-span-full">
            <CardHeader className="pb-3">
              <CardTitle>Welcome to Bastion Protocol</CardTitle>
              <CardDescription>
                Connect your wallet to start investing in premium domains and manage your portfolio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Professional domain investment platform</li>
                    <li>• Circle-based collaborative investing</li>
                    <li>• Domain auction marketplace</li>
                    <li>• Portfolio tracking and analytics</li>
                    <li>• Lending and borrowing services</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Get Started:</h3>
                  <ol className="space-y-1 text-sm text-muted-foreground">
                    <li>1. Connect your Web3 wallet</li>
                    <li>2. Join or create investment circles</li>
                    <li>3. Browse domain auctions</li>
                    <li>4. Start building your portfolio</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Connected State - Dashboard */
          <>
            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.name}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.name}
                    </CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      {stat.changeType === "positive" ? (
                        <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                      ) : (
                        <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                      )}
                      <span
                        className={
                          stat.changeType === "positive"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {stat.change}
                      </span>
                      <span className="ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest investments and transactions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between border-b border-border/40 pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex flex-col">
                          <p className="text-sm font-medium">
                            {activity.description}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                        <div className="text-sm font-semibold">
                          {activity.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Manage your investments and portfolio.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Browse Auctions
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Join Circle
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Lend Assets
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Activity className="mr-2 h-4 w-4" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
