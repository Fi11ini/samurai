import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_NrUVuKeuF9-dpa24NGuGzV6uZJg3sA01g&s"
                     alt="" srcSet=""/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img
                    src="https://png.pngtree.com/thumb_back/fw800/background/20230612/pngtree-images-of-winter-and-white-background-wallpapers-free-download-image_2935697.jpg"
                    alt=""/>
                </div>
                <div>
                    Ava + discription
                    <div>
                        New post
                    </div>

                </div>
                <div>
                    My posts
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
