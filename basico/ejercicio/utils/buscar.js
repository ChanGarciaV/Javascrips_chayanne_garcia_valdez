function buscarCaracter(str1,str2)
{
    for(const item of str1 )
    {
        console.log(item);
        if( item == str2)
        {
            return "Si contiene la letra"; 
        }
    }
    return "No contiene la letra" + str2;
}