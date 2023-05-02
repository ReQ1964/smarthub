import classes from './Item.module.scss'
import filledStar from '../../../assets/icon/rating//star-filled.svg'
import star from '../../../assets/icon/rating/star.svg'
import Button from '../../../components/UI/Button'

export const Item = ({product}) => {

  return <section className={classes.item}>

    <img src={product.img} alt="" />
    <div className={classes.images}>
      <img src={product.img} alt="" />
      <img src={product.img} alt="" />
    </div>

    <div className={classes.description}>
      <div className={classes.info}>
        <h3>{product.name}</h3>
        <div className={classes.rating}>
              <div className={classes.stars}>
                <img src={filledStar} alt="" />
                <img src={filledStar} alt="" />
                <img src={filledStar} alt="" />
                <img src={filledStar} alt="" />
                <img src={star} alt="" />
              </div>
              <p>10 reviews</p>
          </div>
      </div>
        
      <div className={classes.status}>
        <h3 className={classes.price}>
          ${product.price}
        </h3>
        <p className={classes.availability}><span>Availability:</span> In Stock</p>
      </div>

      <p className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad accusantium, voluptatum tenetur corrupti sint magnam obcaecati incidunt culpa soluta facilis aliquid voluptatem minus nostrum quod? Voluptas cupiditate quisquam adipisci?
      </p>

      <div className={classes.colors}>{product.colors.map(color => {
          return <div className={classes.color} style={{
              backgroundColor: color
          }}></div>
      })}
      </div>

      <div className={classes.controls}>
        <Button>Add to cart</Button>
      </div>

      {/* Make a form with picking colors, make one instantly picked */}

    </div>
  </section>
    
  
}

export default Item