import React, { useState, useEffect, useRef } from 'react'
import { PaperAirplaneIcon, chat } from '@heroicons/react/solid'

function TalkToUs() {
    const [isWindowOpen, toggleWindow] = useState(false)
    const [messages, setMessages] = useState([
        'Hello, how can we help You?',
    ])
    const [isFocused, setIsFocused] = useState(false);
    const chatRef = useRef(null);
    const inputRef = useRef(null)

    useEffect(() => {
        // Scroll to the bottom when messages change
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
        
      }, [messages]);
    

    const sendAutomatedMessage = () => {
        setTimeout(() => {
            setMessages((prevState) => ([...prevState, 'We have received Your message, please await our response.']))
        }, 1500)
    }

    const addMessage = () => {
        if (!inputRef.current.value) return
        
        setMessages((prevState) => ([...prevState, inputRef.current.value]))
        setTimeout(() => {
            inputRef.current.value = ''
        }, 200)

        sendAutomatedMessage();
    }

    const sendMessageWithEnter = (e) => {
        if (e.key === 'Enter') {
            // if (isFocused) {
            //     addMessage()
            // }
            //     addMessage()
        }
        
    }

    useEffect(() => {
        window.addEventListener('keydown', sendMessageWithEnter)
        return () => window.removeEventListener('keydown', sendMessageWithEnter)
    }, [])

    const handleFocus = () => {
        setIsFocused(true);
      };
    
    const handleBlur = () => {
        setIsFocused(false);
    };
  return (
    <>
        {isWindowOpen ? (
            <>
                <div className=' chatWindow flex flex-col w-5/6  sm:max-w-[250px] text-white bg-white border border-gray-800 bg-white-500 shadow-xl rounded-md fixed right-0 md:right-20 bottom-20 h-[400px]'>

                    {/* TASK BAR */}
                    <div className=' relative shadow-md border-b border-gray-500 bg-gray-500 rounded-t-md items-center font-semibold flex justify-between'>
                        <div className='ml-4'>Havir support</div>
                        <div onClick={() => {toggleWindow(false)}}  className='bg-[#FD5B61] h-full rounded-tr-md p-3 cursor-pointer'>V</div>
                    </div>

                    {/* CHAT */}
                    <div ref={chatRef} className=' flex flex-col overflow-y-scroll gap-3 flex-grow text-black p-2'>
                        {messages.map((message,i) => {
                            return (
                            <div className={`even:text-black break-all even:bg-gray-200 bg-[#FD5B61] p-2 max-w-[180px] w-fit rounded-md text-white ${i % 2 ? 'messageRight self-end' : 'messageLeft'}`} key={i}>
                                {message}
                            </div>
                            )
                        })}
                    </div>

                    {/* INPUT */}
                    <div className='border border-gray-500 flex items-center justify-center p-1 gap-2'>
                        <input onFocus={handleFocus} onBlur={handleBlur} ref={inputRef} className='text-gray-800 flex-grow focus:ring-0 focus:outline-none  p-2' type='text' placeholder='Type here...' />
                        <div onClick={addMessage}>
                            <PaperAirplaneIcon className='h-8 w-8 rotate-45 text-[#FD5B61] -translate-y-1 cursor-pointer duration-100 hover:scale-110' />
                        </div>
                    </div>
                </div>
            </>
        ) : (
        <>
            <div onClick={() => {toggleWindow(true)}} className='border border-red-500  bg-[#FD5B61] cursor-pointer shadow-xl rounded-full fixed right-12 bottom-12 hover:scale-110 duration-200 '>
                <div className=''>
                        
                        <div className="slowDisappear flex-1 font-semibold text-xl absolute bg-[#FD5B61] whitespace-nowrap text-white p-2 rounded-lg mb-2 -left-[140px] bottom-1/2 translate-y-1/2">
                            <div className=''>Let us help!</div>

                            <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-[#FD5B61]"></div>
                        </div>
                        <span className='p-3 block text-3xl relative z-10'>👋</span>
                </div>
            </div>
        </>
        )}
    </>
  )
}

export default TalkToUs