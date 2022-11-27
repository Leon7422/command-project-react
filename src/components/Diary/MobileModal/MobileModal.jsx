import scss from '../MobileModal/MobileModal.module.scss';
const MobileModal = () => {
  return (
    <form onSubmit={null} className={scss.form}>
      <div className={scss.box}>
        <input
          type="text"
          onChange={null}
          placeholder="Enter product name"
          className={scss.input}
          value={null}
        />
        <input
          onChange={null}
          type="text"
          placeholder="Grams"
          className={`${scss.input} ${scss.grams}`}
        />
      </div>
      <button type="submit" className={scss.buttonAdd}>
        Add
      </button>
    </form>
  )
}

export default MobileModal;