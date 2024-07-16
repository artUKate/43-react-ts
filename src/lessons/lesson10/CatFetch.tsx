import { useEffect, useState } from 'react';
import MyButton from '../../components/myButton/MyButton';
import styles from './catFetch.module.css'


function CatFetch () {
    interface ICatData {
        fact: string;
        length: number;
      }
    
      const [loading, setLoading] = useState(true);
      const [catFacts, setCat] = useState<ICatData[]>([]);
  
    
      const fetchCat = () => {
        setLoading(true);
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => {
                setCat(prevFacts => [...prevFacts, data]);
                setLoading(false);
            });
    };
      useEffect(() => {
        fetchCat();
      }, []);
    
    
      const handleGetMoreInfo = () => {
        fetchCat();
      };
    
      const handleDeleteAll = () => {
        setCat([]);
      };

      return (
        <div className="lesson-container">
            {loading && <div className={styles.spinner}></div>}
            <div className={styles.cat}>
            {!loading && catFacts.map((fact, index) => (
                <div key={index} className={styles.catFact}>
                    <p>{fact.fact}</p>
                </div>
            ))}
            </div>
            <MyButton name={'GET MORE INFO'} onClick={handleGetMoreInfo} />
            {catFacts.length > 0 && <MyButton name={'DELETE ALL DATA'} onClick={handleDeleteAll} />}
        </div>
    );
}
export default CatFetch;

