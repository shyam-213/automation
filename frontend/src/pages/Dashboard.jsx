import { useState } from 'react'
import { Menu } from '@headlessui/react'
import { Settings, User, ChevronDown } from 'lucide-react'

const applications = [
  {
    id: 1,
    name: 'Connect',
    icon: '🔗',
    description: 'Integrate different applications and start automating your work.',
    href: '/connect'
  },
  {
    id: 2,
    name: 'Subscription Billing', 
    icon: '💰',
    description: 'Start accepting one-time and recurring subscription payments.',
    href: '/billing'
  },
  {
    id: 3,
    name: 'Email Marketing',
    icon: '📧', 
    description: 'Send email newsletters to your subscribers and customers.',
    href: '/email-marketing'
  },
  {
    id: 4,
    name: 'Email Verification',
    icon: '✅',
    description: 'Verify your email list to remove invalid and bad emails.',
    href: '/email-verification'
  },
  {
    id: 5,
    name: 'Hook',
    icon: '🔗',
    description: 'Webhook event handling for scalable applications.',
    href: '/hook'
  },
  {
    id: 6,
    name: 'Chatflow',
    icon: '💬',
    description: 'Automate WhatsApp conversation effortlessly.',
    href: '/chatflow'
  },
]

const Dashboard = () => {
  const [isSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-50" style={{marginBottom: isSidebarOpen ? '-64px' : '0'}}>
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a1a1a] text-white fixed h-full">
        <div className="p-4">
          <img src="/src/assets/logo.svg" alt="Logo" className="h-8" />
        </div>
        <nav className="mt-8">
          <div className="px-4 py-3 hover:bg-gray-800 cursor-pointer">
            <div className="flex">
              <span className="text-2xl">📱</span>
              <span className="ml-3 text-lg">All Apps</span>
            </div>
          </div>
          <div className="px-4 py-3 hover:bg-gray-800 cursor-pointer">
            <div className="flex">
              <span className="text-2xl">👤</span>
              <span className="ml-3 text-lg">Account</span>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-8 py-4">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center text-gray-700 hover:text-gray-900">
                <span className="mr-2">All Applications</span>
                <ChevronDown className="h-4 w-4" />
              </Menu.Button>

              <Menu.Items className="absolute left-0 mt-2 w-56 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                {applications.map((app) => (
                  <Menu.Item key={app.id}>
                    {({ active }) => (
                      <a
                        href={app.href}
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } flex px-4 py-2 text-sm text-gray-700`}
                      >
                        <span className="mr-3">{app.icon}</span>
                        {app.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
            
            <div className="flex items-center space-x-6">
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="h-5 w-5" />
              </button>

              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                  <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
                </Menu.Button>

                <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/profile"
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } flex px-4 py-2 text-sm text-gray-700`}
                      >
                        <User className="mr-3 h-5 w-5" />
                        Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/settings"
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } flex px-4 py-2 text-sm text-gray-700`}
                      >
                        <Settings className="mr-3 h-5 w-5" />
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">All Apps</h1>
            <p className="text-gray-600">
              Click 'Access Now' to start using any application. With a single Plus plan, you can enjoy full access to all apps.{' '}
              <a href="/pricing" className="text-blue-500 hover:text-blue-600">
                Learn more
              </a>
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.id}
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 text-2xl">{app.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {app.name}
                </h3>
                <p className="mb-4 text-gray-600">{app.description}</p>
                <div className="flex gap-3">
                  <a href={app.href} className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Access Now
                  </a>
                  <a href={`${app.href}/docs`} className="rounded-md px-4 py-2 text-blue-500 hover:bg-gray-50">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard