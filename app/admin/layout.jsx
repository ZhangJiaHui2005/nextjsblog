import SideBar from '@/components/AdminComponents/SideBar'
import './globals.css'

export default function Layout({children}) {
    return (
        <html lang="en">
        <head>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        </head>
        <body className='flex'>
          <div className='flex'>
            <SideBar />
          </div>
          
          <main className='lg:px-24 md:px-12 py-12'>
            {children}
          </main>
        </body>
      </html>
    )
}
