import ItemCard from './itemCard'
import picture from './assets/practice.png'


var enteredName = 'Salmon';

export default function ItemList() {
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.');
                }} />
                <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.');
                }} />

                <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.');

                }} />


                <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.');

                }} />

                <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.');

                }} />

                <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.');

                }} />

                <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.');

                }} />

                <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.');

                }} />

                <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.');

                }} />

            </div>
        </div>
    )
}