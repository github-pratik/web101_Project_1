import './App.css'
import EventCard from './components/EventCard'
import reactImage from './assets/react.png'
import aiImage from './assets/aiml.jpeg'
import cloudImage from './assets/cloudarch.jpeg'
import securityImage from './assets/networksec.png'
import mobileImage from './assets/mobiledev.jpeg'
import devopsImage from './assets/devops.png'
import dataImage from './assets/datasc.jpeg'
import blockchainImage from './assets/webchain.jpeg'
import designImage from './assets/uiux.png'
import startupImage from './assets/techstart.jpeg'

function App() {
  const events = [
    {
      type: "Workshop",
      title: "React Advanced Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Hub Downtown",
      organizer: "React Dev Community",
      description: "Deep dive into advanced React patterns, hooks, and performance optimization techniques with industry experts.",
      image: reactImage,
      link: "https://reactjs.org"
    },
    {
      type: "Meetup",
      title: "AI/ML Meetup",
      date: "March 20, 2024",
      time: "6:30 PM - 8:30 PM",
      location: "Innovation Center",
      organizer: "AI Enthusiasts Group",
      description: "Monthly meetup discussing latest trends in AI and Machine Learning. This month: Large Language Models.",
      image: aiImage,
      link: "https://www.meetup.com/artificialintelligenceandmachinelearning/"
    },
    {
      type: "Workshop",
      title: "AWS Cloud Architecture Workshop",
      date: "March 22, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "AWS Training Center",
      organizer: "Cloud Architects Association",
      description: "Learn to design scalable and resilient cloud architectures using AWS services and best practices.",
      image: cloudImage,
      link: "https://workshops.aws/categories/Architecture"
    },
    {
      type: "Meetup",
      title: "Cybersecurity Network",
      date: "March 25, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Digital Security Hub",
      organizer: "CyberSec Professionals",
      description: "Network with security professionals and discuss latest threats and defense strategies in cybersecurity.",
      image: securityImage,
      link: "https://www.meetup.com/topics/cybersecurity/"
    },
    {
      type: "Workshop",
      title: "Mobile App Development",
      date: "March 28, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Mobile Tech Center",
      organizer: "App Developers Guild",
      description: "Hands-on workshop covering React Native and Flutter for cross-platform mobile development.",
      image: mobileImage,
      link: "https://www.freecodecamp.org/news/tag/mobile-app-development/"
    },
    {
      type: "Meetup",
      title: "DevOps Community",
      date: "April 2, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Tech Campus",
      organizer: "DevOps Engineers Network",
      description: "Share experiences and best practices in DevOps, CI/CD, and infrastructure automation.",
      image: devopsImage,
      link: "https://www.meetup.com/topics/devops/"
    },
    {
      type: "Workshop",
      title: "Data Science Bootcamp",
      date: "April 5, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Data Analytics Lab",
      organizer: "Data Science Institute",
      description: "Intensive workshop on data analysis, visualization, and machine learning using Python and popular libraries.",
      image: dataImage,
      link: "https://www.freecodecamp.org/news/tag/data-science/"
    },
    {
      type: "Meetup",
      title: "Web3 & Blockchain",
      date: "April 8, 2024",
      time: "7:00 PM - 9:30 PM",
      location: "Crypto Innovation Hub",
      organizer: "Blockchain Developers",
      description: "Explore the latest developments in Web3, DeFi, and blockchain technology with industry experts.",
      image: blockchainImage,
      link: "https://www.meetup.com/topics/blockchain/"
    },
    {
      type: "Workshop",
      title: "UI/UX Design Sprint",
      date: "April 12, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Design Studio",
      organizer: "UX Design Community",
      description: "Learn design thinking, wireframing, and prototyping through hands-on exercises and real-world projects.",
      image: designImage,
      link: "https://www.freecodecamp.org/news/tag/ui-ux/"
    },
    {
      type: "Meetup",
      title: "Tech Startup Network",
      date: "April 15, 2024",
      time: "6:30 PM - 8:30 PM",
      location: "Startup Incubator",
      organizer: "Founders Circle",
      description: "Connect with fellow entrepreneurs, share experiences, and learn about funding opportunities in tech.",
      image: startupImage,
      link: "https://www.meetup.com/topics/tech-startups/"
    }
  ]

  return (
    <div className="app">
      <header>
        <h1>Tech Community Events</h1>
      </header>
      <div className="events-container">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  )
}

export default App
