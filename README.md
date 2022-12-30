
## Save template (www.website.com)
> Nôi dụng : Website dùng để lưu trữ những mẫu website đã được học hỏi và viết ra cấu trúc trong bài học. Để giúp trong tương lai muốn sử dụng mẫu thì sẽ tải về mà không cần phải **Setup lại dự án .** Tiến hành vào bước tiếp theo  

## Quy tắc dự án 🔒
###### 1. Dự án được viết bằng typescript
_typescript là công cụ tuyệt vời . Để khai báo biến phát triển dự án lớn hơn ... ( Nó sửa trong tương lai gần nhất)_

###### 2. Code CSS và React gọn, đẹp và siêu dễ hiểu 🚀

2.1 Quy tắc CSS sử dụng cấu trúc
```
.selector {
  /* Positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  /* Display & Box Model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;

  /* Color */
  background: #000;
  color: #fff
  
  /* Text */
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;

  /* Other */
  cursor: pointer;
}
```
2.2 Quy tắc React sử dụng cấu trúc
 
 ```
 // ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Chat App Component Imports
import Chat from './Chat'
import Sidebar from './SidebarLeft'
import UserProfileSidebar from './UserProfileSidebar'

// ** Third Party Components
import classnames from 'classnames'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, getChatContacts } from './store/actions'

import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'

const AppChat = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.chat)

  // ** States
  const [user, setUser] = useState({})
  const [sidebar, setSidebar] = useState(false)
  const [userSidebarRight, setUserSidebarRight] = useState(false)
  const [userSidebarLeft, setUserSidebarLeft] = useState(false)

  // ** Sidebar & overlay toggle functions
  const handleSidebar = () => setSidebar(!sidebar)
  const handleUserSidebarLeft = () => setUserSidebarLeft(!userSidebarLeft)
  const handleUserSidebarRight = () => setUserSidebarRight(!userSidebarRight)
  const handleOverlayClick = () => {
    setSidebar(false)
    setUserSidebarRight(false)
    setUserSidebarLeft(false)
  }

  // ** Set user function for Right Sidebar
  const handleUser = obj => setUser(obj)

  // ** Get data on Mount
  useEffect(() => {
    dispatch(getChatContacts())
    dispatch(getUserProfile())
  }, [dispatch])

  return (
    <Fragment>
      <Sidebar
        store={store}
        sidebar={sidebar}
        handleSidebar={handleSidebar}
        userSidebarLeft={userSidebarLeft}
        handleUserSidebarLeft={handleUserSidebarLeft}
      />
      <div className='content-right'>
        <div className='content-wrapper'>
          <div className='content-body'>
            <div
              className={classnames('body-content-overlay', {
                show: userSidebarRight === true || sidebar === true || userSidebarLeft === true
              })}
              onClick={handleOverlayClick}
            ></div>
            <Chat
              store={store}
              handleUser={handleUser}
              handleSidebar={handleSidebar}
              userSidebarLeft={userSidebarLeft}
              handleUserSidebarRight={handleUserSidebarRight}
            />
            <UserProfileSidebar
              user={user}
              userSidebarRight={userSidebarRight}
              handleUserSidebarRight={handleUserSidebarRight}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AppChat
 ```
###### 3. Code là dể . Giải quyết vẫn đề nó mới khó 
_Viết chi tiết dự án của bản thân . Càng chi tiết càng dể code_
[Trang website bản vẽ](https://markdownlivepreview.com/).

###### 4. Quy tắc Github
* Không được pull tất cả file lên như git add .
* Không được pull code không sửa đổi 
* Không 

## Lời kết 
> Đây là dự án học hỏi của tôi về cách viết code hiểu quả . Những mục trên kia chưa chắc là đúng . Bạn nên coi nó trò vui vẻ vì tôi khá gà trong code .Cảm ơn bạn đã xem
