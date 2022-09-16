const FormatNumber = ({number}) => {
    return <span>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(number)}</span>
}

export default FormatNumber;