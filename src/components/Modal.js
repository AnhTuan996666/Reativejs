import React from 'react';
import './Modal.css';

function Modal({closeModal},{active}) {
return (
    <>
      <div className='modal-background'>
          <div className={ active ? 'modal-container' : 'modal-container active'}>
              <button className="close" onClick={()=>closeModal(false)}>X</button>
            <div className="modal-title">
              <h3> Show Modal </h3> 
            </div>
            <div className='modal-body'> 
              <p>
                KHI ANH ĐANG VẤP NGÃ
                CUỘC ĐỜI BÔN BA
                MỎI MỆT TẤT CẢ !
                EM ĐÃ BƯỚC QUA ,
                ÔM ANH NÓI LÀ ...
                CÓ EM ĐÂY MÀ !
                KHÔNG SAO .
                
                ÂN CẦN VÀ SÂU SẮC
                MỌI CHUYỆN TRONG ANH
                NHÌN CẢ THẾ GIỚI
                BẰNG MỖI NƠI ANH !
                TỪ KHI EM ĐẾN BÊN
              </p>
            </div>
            <div className="modal-footer"> 
            <button className="modal-btn-canel" onClick={()=>closeModal(false)}>Cancel</button>
            <button className="modal-btn-canel modal-btn-canel--highlight">Save</button>
            </div>
          </div>
          <div className="modal-bg" onClick={()=>closeModal(false)}></div>
      </div>
    </>
  )
}

export default Modal;