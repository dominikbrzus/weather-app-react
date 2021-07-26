// In this section is the form content
const Form = ({handleClickWeather, checkCity, datas}) => {
    return (
        <>
        <h1 className='title'>Check weather in your city</h1>
        <form onSubmit={handleClickWeather} className='form'>
        <input type='text' onChange={checkCity} placeholder='Type the city ...' value={datas} className='form__input'/>
        <button type='submit' className='form__btn'>Send</button>
      </form>
      </>
    )
}

export default Form