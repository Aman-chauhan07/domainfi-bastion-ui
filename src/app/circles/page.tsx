'use client';

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Plus, TrendingUp, DollarSign, Calendar, User } from "lucide-react";
import { useAccount } from "wagmi";

const myCircles = [
  { id: 1, name: "Alpha Domains", description: "Premium domain investment circle focusing on .eth and .com domains", members: 24, totalInvested: "$125,000", monthlyReturn: "12.5%", role: "Admin", status: "active", created: "2024-01-15" },
  { id: 2, name: "DeFi Domains", description: "Investing in DeFi-related domain names and Web3 brands", members: 18, totalInvested: "$89,000", monthlyReturn: "8.3%", role: "Member", status: "active", created: "2024-02-20" },
  { id: 3, name: "Tech Startups", description: "Early-stage domain investments for emerging tech companies", members: 31, totalInvested: "$67,500", monthlyReturn: "15.7%", role: "Member", status: "active", created: "2024-03-05" },
];

const availableCircles = [
  { id: 4, name: "Crypto Gaming", description: "Gaming and metaverse domain investments", members: 45, totalInvested: "$198,000", monthlyReturn: "18.2%", minimumInvestment: "$5,000", openSpots: 5 },
  { id: 5, name: "Enterprise Domains", description: "High-value enterprise and corporate domain portfolio", members: 12, totalInvested: "$456,000", monthlyReturn: "6.8%", minimumInvestment: "$25,000", openSpots: 3 },
  { id: 6, name: "AI & Blockchain", description: "Artificial intelligence and blockchain domain investments", members: 28, totalInvested: "$134,000", monthlyReturn: "14.1%", minimumInvestment: "$10,000", openSpots: 7 },
];

export default function CirclesPage() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <Layout>
        <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Investment Circles</h2>
            <p className="text-gray-400 mt-1">
              Connect your wallet to view and join investment circles.
            </p>
          </div>

          <Card className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-white">Join Investment Circles</CardTitle>
              <CardDescription className="text-gray-300">
                Collaborate with other investors to build diverse domain portfolios and share returns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-semibold text-white">What are Investment Circles?</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Pool resources with other investors to access premium domains</li>
                  <li>• Share expertise and research with circle members</li>
                  <li>• Diversify risk across multiple domain investments</li>
                  <li>• Benefit from collective decision-making and due diligence</li>
                  <li>• Transparent profit sharing based on contribution</li>
                </ul>
                <Button className="mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform">
                  Connect Wallet to Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Investment Circles</h2>
            <p className="text-gray-400 mt-1">
              Manage your circles and discover new investment opportunities.
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Circle
          </Button>
        </div>

        {/* My Circles */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">My Circles</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {myCircles.map(circle => (
              <Card key={circle.id} className="cursor-pointer bg-gray-800/30 backdrop-blur-md border border-gray-700/50 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{circle.name}</CardTitle>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      circle.role === 'Admin'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-gray-600/20 text-gray-300'
                    }`}>
                      {circle.role}
                    </span>
                  </div>
                  <CardDescription className="line-clamp-2 text-gray-300">
                    {circle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" />{circle.members} members</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(circle.created).toLocaleDateString()}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-700/50">
                    <div>
                      <p className="text-xs text-gray-400">Total Invested</p>
                      <p className="font-semibold text-white">{circle.totalInvested}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Monthly Return</p>
                      <p className="font-semibold text-green-400">{circle.monthlyReturn}</p>
                    </div>
                  </div>

                  <Button className="w-full border border-gray-600/40 hover:border-purple-400 text-white hover:text-purple-400 hover:scale-105 transition-all" variant="outline" size="sm">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Circles */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Available Circles</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {availableCircles.map(circle => (
              <Card key={circle.id} className="cursor-pointer bg-gray-800/30 backdrop-blur-md border border-gray-700/50 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{circle.name}</CardTitle>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                      {circle.openSpots} spots left
                    </span>
                  </div>
                  <CardDescription className="line-clamp-2 text-gray-300">{circle.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" />{circle.members} members</span>
                    <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" />Min: {circle.minimumInvestment}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-700/50">
                    <div>
                      <p className="text-xs text-gray-400">Total Invested</p>
                      <p className="font-semibold text-white">{circle.totalInvested}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Monthly Return</p>
                      <p className="font-semibold text-green-400">{circle.monthlyReturn}</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform text-white" size="sm">
                    Join Circle
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="grid gap-4 md:grid-cols-4 pt-6">
          {[
            { label: "Circles Joined", value: 3, icon: Users },
            { label: "Total Invested", value: "$45,200", icon: DollarSign },
            { label: "Avg. Return", value: "12.2%", icon: TrendingUp, color: "text-green-400" },
            { label: "Admin Circles", value: 1, icon: User }
          ].map((stat, idx) => (
            <Card key={idx} className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              <CardContent className="p-4 flex items-center gap-3">
                <stat.icon className={`h-5 w-5 text-gray-400`} />
                <div>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                  <p className={`text-lg font-semibold ${stat.color ? stat.color : 'text-white'}`}>{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
