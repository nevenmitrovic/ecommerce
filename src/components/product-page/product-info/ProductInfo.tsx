import { useReducer } from "react";

import "./product-info.style.css";

import {
  initialState,
  visibilityReducer,
  type IVisibilityState,
} from "@/stores/reducers/VisibilityReducer";

interface ISpecs {
  [key: string]: string;
}

interface ProductInfoProps {
  description: string;
  features: string[];
  specs: ISpecs[];
}

const ProductInfo = ({ description, features, specs }: ProductInfoProps) => {
  const [state, dispatch] = useReducer(visibilityReducer, initialState);
  const handleSectionToggle = (section: keyof IVisibilityState) => {
    dispatch({ type: "TOGGLE_SECTION", section });
  };

  return (
    <div className="product-info-container">
      <div>
        <h3
          onClick={() => handleSectionToggle("descriptionVisible")}
          style={
            state.descriptionVisible
              ? { color: "var(--clr-secondary)" }
              : { color: "var(--clr-light-gray-500)" }
          }
        >
          Description
        </h3>
        {state.descriptionVisible && <p>{description}</p>}
      </div>
      <div>
        <h3
          onClick={() => handleSectionToggle("featuresVisible")}
          style={
            state.featuresVisible
              ? { color: "var(--clr-secondary)" }
              : { color: "var(--clr-light-gray-500)" }
          }
        >
          Features
        </h3>
        <ul>
          {state.featuresVisible && (
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
        </ul>
      </div>
      <div>
        <h3
          onClick={() => handleSectionToggle("specsVisible")}
          style={
            state.specsVisible
              ? { color: "var(--clr-secondary)" }
              : { color: "var(--clr-light-gray-500)" }
          }
        >
          Specifications
        </h3>
        {state.specsVisible && (
          <div className="spec-container">
            {specs.map((spec, index) => (
              <div key={index} className="spec-item">
                {Object.entries(spec).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
