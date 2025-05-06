import { useState } from 'react'
import ProductCard from './component/views/home/ProductCard'
import BidFormComponent from './component/views/home/BidFormComponent'
import BidderInfo from './component/views/home/BidderInfo'
import CountdownTimerComponent from './component/views/home/CountdownTimerComponent'
import SidebarComponent from './component/views/home/SidebarComponent'
import CardLayout from './component/layout/CardLayout'
import SectionContainer from './component/layout/SectionContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto p-4">
      <SectionContainer 
        title="Featured Auctions" 
        subtitle="Browse our current live auctions"
        className="mt-8"
      >
        <ProductCard
          title="Vintage Rolex Submariner Watch"
          description="A rare collector's item"
          imageUrl="https://via.placeholder.com/400x300"
          currentBid="4,250"
          condition="Excellent"
          year="1965"
          bidCount="12"
          watcherCount="23"
          isLive={true}
          timeLeft="3d 12h 45m left"
        />
        
        <ProductCard
          title="Picasso Sketch Drawing"
          description="Original pencil sketch"
          imageUrl="https://via.placeholder.com/400x300"
          currentBid="12,750"
          condition="Good"
          year="1942"
          bidCount="8"
          watcherCount="15"
          isLive={true}
          timeLeft="1d 5h 22m left"
        />
      </SectionContainer>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <CardLayout title="Bid History (14)" bodyClass="space-y-3 max-h-64 overflow-y-auto">
            <BidderInfo
              initials="JD"
              bgColor="bg-blue-100"
              textColor="text-blue-600"
              username="JohnDoe82"
              bidTime="Today, 10:45 AM"
              bidAmount="4,250"
            />
            <BidderInfo
              initials="AS"
              bgColor="bg-purple-100"
              textColor="text-purple-600"
              username="AuctionStar"
              bidTime="Today, 09:30 AM"
              bidAmount="4,100"
            />
            <BidderInfo
              initials="CW"
              bgColor="bg-green-100"
              textColor="text-green-600"
              username="CollectorW"
              bidTime="Yesterday, 8:15 PM"
              bidAmount="3,950"
            />
          </CardLayout>
        </div>
        
        <div className="space-y-6">
          <BidFormComponent />
          <CountdownTimerComponent />
        </div>
      </div>

      <SidebarComponent />
    </div>
  )
}

export default App