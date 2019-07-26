
function parseMoney( int )
{
        return parseInt(int).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
}



export default parseMoney