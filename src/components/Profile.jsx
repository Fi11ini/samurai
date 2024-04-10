import s from './Profile.module.css';

export const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20230612/pngtree-images-of-winter-and-white-background-wallpapers-free-download-image_2935697.jpg"
                alt=""/>
        </div>
        <div>
            Ava + discription


        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>;
};