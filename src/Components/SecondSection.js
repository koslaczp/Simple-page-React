import '../css/App.css';
import '../css/SecondSection.css';
import '../css/MediaQueries.css';
import Item from './Item';


const SecondSection = () => {

    return (
        <section className="SecondSection">
            <div className="center50">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h2>Heading</h2>
                <article className="secondShow">
                    <Item><h3>Pierwszy nagłówek</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Item>
                    <Item><h3>Drugi bardzo długi nagłówek</h3><p>Pellentesque scelerisque pharetra magna non sollicitudin. Nam at ultricies dui. Etiam ac massa dolor.</p></Item>
                    <Item><h3>Trzeci  nagłówek</h3><p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vitae aliquam orci.</p></Item>
                </article >
            </div >
        </section >
    )
}
export default SecondSection;

