interface Iprops {
    src: string;
}

const IconImage = ({src}: Iprops) => {
    return(
        <img src={src} alt="Icon" className="w-5 h-5" />
    );
}

export default IconImage