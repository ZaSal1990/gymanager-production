import React, { useContext } from "react";
import Bulletin from "./Bulletin";
import BulletinForm from "./BulletinForm";
import "./BulletinBoard.scss";
//import useBulletinBoardData from "../../hooks/useBulletinBoardData";
import { format } from 'timeago.js';

import { bulletinBoardContext } from "../../providers/BulletinBoardProvider";
import { loginButtonContext } from "../../providers/LoginButtonProvider";

export default function BulletinBoard() {

  const { bulletinData, editStatusOfBulletin } = useContext(bulletinBoardContext);
  const { user, isAdmin } = useContext(loginButtonContext);

  const bulletinItems = bulletinData.slice().reverse().map((bulletin, index) => {
    return (
      <Bulletin key={bulletin.id} title={bulletin.title} description={bulletin.description} time={format(bulletin.created_at)} onDelete={() => editStatusOfBulletin(bulletin.id, bulletinData.length - index - 1)} isAdmin={isAdmin} />
    );
  });

  return (
    <div className="bulletin-board">
      <div className="bulletin-items-container">
        {bulletinItems}
      </div>
      { isAdmin && <BulletinForm /> }
    </div>
  );
}