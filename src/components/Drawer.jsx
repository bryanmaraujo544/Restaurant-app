import RcDrawer from 'rc-drawer'
import styled from 'styled-components'

export const Drawer = ({
    open,
    width,
    onClose,
    closeButton, 
    toggleHandler,
    drawerHandler,
    children,
    closeButtonn,
   ...props
}) => {
    return (
        <div>
            <RcDrawer
                handler={false}
                width="320px"
                placement="left"
                duration={'0.4s'}
                open={open}
                onClose={toggleHandler}
                className={'drawer'}
                style={{display: "inline-block"}}
                lelve={null}
                { ...props }
            >
            {closeButtonn && (
                <div onClick={toggleHandler}>
                    {closeButtonn}
                </div>
                
            )}
            <div className="drawer-container">
                {children}
            </div>
            </RcDrawer>
            <div className="handle-button" style={{display: 'inline-block'}} onClick={toggleHandler}>
                {drawerHandler}
            </div>
        </div>
    )
}

