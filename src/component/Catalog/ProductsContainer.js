import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import CreditCardItem from "./CreditCardItem";
import React, { useEffect, useState } from "react";
import Filters from "./Filters"
import Search from "./Search"
import Loader from "../General/Loader"
import {
  CardWrapper,
} from "./CreditsContainer.styled";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const [bankNameFilter, setBankNameFilter] = useState('');
  const [annualFeeFilter, setAnnualFeeFilter] = useState();
  const [rewardsRateInPercentFilter, setRewardsRateInPercentFilter] = useState();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  

  useEffect(() => {
    dispatch(listProducts(bankNameFilter, annualFeeFilter, rewardsRateInPercentFilter));
  }, [dispatch, bankNameFilter, annualFeeFilter, rewardsRateInPercentFilter]);

  
    function filterByBankName(bank_name) {
      if (bank_name !== '') {
        setBankNameFilter(bank_name);
      }
    }
  
    function filterByAnnualFee(annualFee) {
      if (annualFee > 0) {
        setAnnualFeeFilter(annualFee);
      }
    }
  
    function filterByRewardsRate(rewardsRateInPercent) {
      if (rewardsRateInPercent > 0) {
        setRewardsRateInPercentFilter(rewardsRateInPercent);
      }
    }

      return (
    <div>
      <h2>Latest Products</h2>
      <div style={{ backgroundColor: "white",  marginTop: "-50px",paddingLeft: "100px"}}>
        <Search byBankName={filterByBankName} />
        <Filters byRewardsRate={filterByRewardsRate} byAnnualFee={filterByAnnualFee} byBankName={filterByBankName}/> 
        </div>
      <CardWrapper>
        {loading ? (
                <Loader />
                ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <CreditCardItem
                    id={product.id}
                    title={product.title}
                    bank_name={product.bank_name}
                    image={product.image}
                    annualFee={product.annualFee}
                    introOffer={product.introOffer}
                    rewardsRateInPercent={product.rewardsRateInPercent}
                    price={product.price}
                  />
          ))
        )}
      </CardWrapper>
    </div>
  );
};

export default ProductsContainer;