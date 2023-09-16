import './styles.css';
const ExternalLink = ({text , link}) => {
    return <button className='primary-button'> <a href={link}>{text}</a> </button>
}
export default ExternalLink;