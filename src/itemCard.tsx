import Button from './button'
import DisplayItem from './displayItem'



type card = {
    image: string,
    recipeName: string
    onClick: () => void

}

export default function ItemCard({ image, recipeName }: card) {
    return (
        <div className='col-md-3 p-3'>
            <div className='container-fluid'>
                {/* if card is clicked on collapse Instructions */}
                <div className='card-md-2 mb-5  ' id='recipeCard' onClick={() => {
                    const element = document.getElementById('collapseWidthExample');
                    if (element) {
                        element.classList.toggle('show');
                    }
                }}>
                    {/* Img */}
                    <img src={image} className="card-img-top rounded-top border-secondary" alt="Image of food"></img>

                    {/* recipe name */}
                    <div className="card-body m-2">
                        <h5 className="card-title">{recipeName}</h5>

                    </div>
                    {/* buttons */}
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-3'>
                                <Button text='Edit' onClick={(e?: React.MouseEvent<HTMLButtonElement>) => { e?.stopPropagation(); alert('Edit'); }} />
                            </div>
                            <div className='col-6'>
                                <Button text='Delete' onClick={(e?: React.MouseEvent<HTMLButtonElement>) => { e?.stopPropagation(); alert('Delete'); }} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* display Instructions */}
                <DisplayItem />
            </div>
        </div>

    )
}