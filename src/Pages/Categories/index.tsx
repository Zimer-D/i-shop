import { useEffect, useState } from "react";
import axios from 'axios'
import { Button, Form } from "react-bootstrap";
import './Categories.sass'
interface Category {
    id: number,
    name: string
}

const Categories = (props: any) => {
    const { chooseFilter, chooseSort } = props
    const [items, setItems] = useState<Category[]>([]);
    const [pressed, setPressed] = useState<Number | undefined>(undefined);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    `${process.env.REACT_APP_BASE_URL}Categories`
                );
                setItems(result.data);
            } catch (error) { console.log(error) }
        }
        fetchData();
    }, []);
    return (
        <>
            <h2>Категории товаров:</h2>
            <div className="filteringList">
                <div className="categoriesList">
                    {items.map(category => (
                        <Button
                            active={pressed === category.id}
                            style={{ margin: '10px', padding: '2px' }}
                            key={category.id}
                            variant="outline-primary"
                            onClick={() => { chooseFilter(category.id); setPressed(category.id) }}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
                <div className="sorting">
                    Сортировка:
                    <Form.Select className='select' onChange={(e) => chooseSort(e.target.value)}>
                        <option value={''}></option>
                        <option value={'priceASC'}>По возрастанию цены</option>
                        <option value={'priceDSC'}>По убыванию цены</option>
                        <option value={'nameASC'}>По названию (A-Z)</option>
                        <option value={'nameDSC'}>По названию (Z-A)</option>
                    </Form.Select>
                </div>
            </div>
        </>
    )
}

export default Categories
