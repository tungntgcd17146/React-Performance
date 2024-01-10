import Button from '~/components/Button/Button'
import AddIcon from '@mui/icons-material/Add'

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Vite + React</h1>

      <Button
        startIcon={<AddIcon />}
        children='Create'
        onClick={() => console.log('click')}
        color='primary'
        size='small'
      />

      <Button endIcon={<AddIcon />} children='Create' onClick={() => console.log('click')} color='dark' size='normal' />

      <Button children='Create' onClick={() => console.log('click')} color='primary' disabled />

      {/* Custom button */}
      <Button
        className='text-red-500 bg-blue-500 border-yellow-500'
        children='Create'
        onClick={() => console.log('click')}
      />
    </div>
  )
}

export default App
