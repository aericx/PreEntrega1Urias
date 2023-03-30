import bag from './assets/shopping-bag.svg'

const MenuCart = () =>{
    return(
        <div className="shopping">
            <img src={bag} alt="Shopping Bag"/>
            <span class="quantity">0</span>
        </div>
    );
}

export default MenuCart