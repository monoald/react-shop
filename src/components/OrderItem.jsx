import { useContext } from 'react';
import AppContext from '@context/AppContext';
import closeIcon from '@icons/icon_close.png';
import '@styles/OrderItem.scss';

const OrderItem = ( props ) => {
	const { product, indexValue } = props
	const { removeFromCart } = useContext(AppContext)

	const handleRemove = (item) => {
		removeFromCart(item);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>$ {product.price}</p>
			<img src={closeIcon} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	);
}

export default OrderItem;