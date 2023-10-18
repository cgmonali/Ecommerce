import Header from '../Layout/Header';
import classes from './About.module.css';
import aboutImage from '../../images/aboutImage.jpeg';

function About(){

    return (

<>

<Header/>

<h3 className={classes.heading}>About</h3>

<div className={classes.aboutContainer}>
    <img className={classes.imageClass} src={aboutImage} alt="alternate" />
<span className={classes.theory}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis pariatur aspernatur 
    unde obcaecati cumque quaerat suscipit molestiae! Voluptatibus ut deserunt et exercitationem mollitia recusandae eos earum ipsam, accusantium 
    fugiat temporibus officiis quod sed quibusdam modi nobis voluptates a quia ea tempora cum quisquam? Dolores quisquam inventore consectetur 
    qui fugit repellendus dolore tempora vitae expedita tempore, consequatur ea odit obcaecati consequuntur et voluptatibus repudiandae molestiae 
    corporis nesciunt quo quis velit ad id? Laudantium, earum aperiam iusto dolore molestias esse fuga itaque sed soluta commodi beatae 
    quas ex obcaecati veritatis quam id vitae consectetur velit ipsa eaque? Amet vel molestias saepe enim perspiciatis molestiae nobis a consequuntur sapiente 
    officia, alias error magnam autem nemo modi perferendis quaerat ullam architecto nulla, deleniti maxime, soluta esse laudantium porro? Facilis ipsum at tempora 
    cumque, sapiente esse rerum modi illum veniam minus qui soluta quis debitis quod, eveniet saepe aspernatur iure quos eaque? Odit aspernatur iure sit sint culpa ab nesciunt. Provident
     suscipit debitis libero eligendi maxime eaque reiciendis, modi culpa quod quisquam saepe quaerat repellat voluptate itaque perspiciatis sit
      hic ratione vero voluptatibus ad voluptas. Iure consectetur porro nesciunt ratione voluptas deserunt aspernatur. Atque ut reiciendis ducimus
       vero optio pariatur laboriosam vel tempora dicta?</span>
</div>
</>

    );
}

export default About;