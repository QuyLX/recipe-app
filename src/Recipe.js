import React from 'react';
import style from './recipe.module.css';
// style component bằng flie .module.css sẽ có thuộc tính style import từ file module và gọi ra bằng style.tên class
const Recipe = ({ title, calories, imgSrc, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.text}>{title}</h1>
            <img src={imgSrc} alt="" className={style.image} />
            <ol>
                {ingredients.map((ingredient, key) =>
                    <li key={key}>{ingredient.text}</li>
                )}
            </ol>
            <p className={style.text}>{calories}</p>
        </div>
    );
}
export default Recipe;