import "./CardContent.css";

const Pembayaran = ({ dataUser, setDataUser }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser((dataPembayaran) => ({
      ...dataPembayaran,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.id);
  };

  return (
    <div className="card-content p-4" id="Pembayaran">
      <div className="row mb-3">
        <input
          type="radio"
          name="pembayaran"
          id="telkomsel"
          value="Telkomsel"
          onChange={handleChange}
          checked={dataUser.pembayaran === "Telkomsel"}
        />

        <label
          className="pl-3 text-start card-pmbayaran d-flex align-items-center justify-content-start position-relative"
          htmlFor="telkomsel"
        >
          TELKOMSEL
          <p
            className="mx-n5 position-absolute top-50 start-100 translate-middle"
            style={{ width: "120px" }}
          >
            {dataUser.harga}
          </p>
        </label>
      </div>

      <div className="row mb-3">
        <input
          type="radio"
          name="pembayaran"
          id="bca"
          value="BCA"
          onChange={handleChange}
          checked={dataUser.pembayaran === "BCA"}
        />

        <label
          className="pl-3 text-start card-pmbayaran d-flex align-items-center justify-content-start position-relative"
          htmlFor="bca"
        >
          BCA
          <p
            className="mx-n5 position-absolute top-50 start-100 translate-middle"
            style={{ width: "120px" }}
          >
            {dataUser.harga}
          </p>
        </label>
      </div>

      <div className="row mb-3 ">
        <input
          type="radio"
          name="pembayaran"
          id="dana"
          value="DANA"
          onChange={handleChange}
          checked={dataUser.pembayaran === "DANA"}
        />

        <label
          className="pl-3 text-start card-pmbayaran d-flex align-items-center justify-content-start position-relative"
          htmlFor="dana"
        >
          DANA
          <p
            className="mx-n5 position-absolute top-50 start-100 translate-middle"
            style={{ width: "120px" }}
          >
            {dataUser.harga}
          </p>
        </label>
      </div>
    </div>
  );
};

export default Pembayaran;
