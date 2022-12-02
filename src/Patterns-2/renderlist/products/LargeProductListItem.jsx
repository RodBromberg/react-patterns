export const LargeProductListItem = ({ product }) => {
    const { name, price, description,rating } = product
  return (
        <>
        <h3>{name}</h3>
        <p>Price: {price} </p>
        <p>description: {description}</p>
        <h3>rating: </h3>
        <p>{rating}</p>
        </>
  )
}
