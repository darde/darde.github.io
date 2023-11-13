
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import CardDetail from './components/CardDetail';
import { PortfolioContext } from './components/Contexts/PortfolioContext';
import Topbar from './components/Topbar';
import Wrapper from './components/Wrapper';
import './styles/global.css';

function App() {
  const { content, setPortfolioDetail } = useContext(PortfolioContext)
  
  console.log({ content })
  function handleOnClose() {
    setPortfolioDetail(null)
  }

  return (
    <div className='w-full h-full'>
      <div className='w-full h-full md:max-w-[1200px] m-auto'>
        <Topbar />
        {
          content && (
            <div className="fixed bg-black/70 flex justify-center items-center z-50 top-0 bottom-0 left-0 right-0">
              <CardDetail
                title={content.title}
                content={content.description}
                url={content.videoUrl}
                credits={content.credits}
                liveAt={content.liveAt}
                onClose={handleOnClose}
              />
            </div>
          )
        }
        <Wrapper>
          <Outlet />
        </Wrapper>
      </div>
    </div>
  )
}

export default App
