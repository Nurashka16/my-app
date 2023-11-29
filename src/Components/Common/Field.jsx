import React from "react";

const Field = ({
  placeholder,
  onChange,
  isError,
  errorMessage,
  inputProps,
}) => {
  return (
    <>
      <input
        autocomplete="off"
        style={
          isError && { backgroundColor: "#faebeb", border: "solid 1px #e64646" }
        }
        placeholder={placeholder}
        onChange={onChange}
        {...inputProps}
      />
      {isError && (
        <p
          style={{
            marginTop: "5px",
            marginBottom: "6px",
            color: "#e64646",
            fontSize: "13px",
          }}
        >
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default Field;
