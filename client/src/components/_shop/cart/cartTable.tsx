export const CartTable = () => {
    return ( 
        <table id='items' style={{"borderStyle" : "solid"}}>
            <thead>
                <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>
            </thead>
        </table>
    )
}