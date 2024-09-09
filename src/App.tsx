import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Requester from './components/Requester';
import VoucherItem from './components/VoucherItem';
import VoucherModal from './components/VoucherModal';
import Congrats from './components/Congrats';

const vouchers = [
  {
    code: 'YOUR10OFF',
    expiry: '31/07/2024',
    title: '10% Off',
  },
  {
    code: 'YOUR50OFF',
    expiry: '31/07/2024',
    title: '$50.00 Off',
    }
  ];

function App() {
  const [voucherModalVisible, setVoucherModalVisible] = useState(false);
  const [congratsModalVisible, setCongratsModalVisible] = useState(false);

  const handleApplyVoucher = () => {
    setVoucherModalVisible(true);
  };

  const handleApply = () => {
    setVoucherModalVisible(false);
    setCongratsModalVisible(true);
  };

  const handleClose = () => {
    setVoucherModalVisible(false);
  };

  const handleCongratsClose = () => {
    setCongratsModalVisible(false);
  };

  return (
    <>
      <Header title="Vouchers" />
      <div>
        <Requester title="Vouchers" message="You haven't applied a voucher yet" buttonText="APPLY VOUCHER" callbackClick={handleApplyVoucher} />
      </div>
      {voucherModalVisible && <div>
        <VoucherModal title="Apply voucher" vouchers={vouchers} handleApply={handleApply} handleClose={handleClose} />
      </div>}
      {congratsModalVisible && <div>
        <Congrats handleClose={handleCongratsClose} />
      </div>}
    </>
  )
}

export default App
