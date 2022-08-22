import { React, useState, useEffect } from 'react';
import '../style/style.css';
import { getInitialData, showFormattedDate } from '../utils/note';
import Card from './Card';
import Header from './Header';
import Createnewnote from './Createnewnote';
import { getValue, isValidDateValue } from '@testing-library/user-event/dist/utils';

function Konten() {
  const [search, setSearch] = useState('');
  const link = getInitialData();
  const [datasrc, setDatasrc] = useState(link);
  const [update, setUpdate] = useState(false);

  const searchText = (data) => {
    setSearch(data);
  };

  const rmvCard = (id) => {
    setDatasrc(
      datasrc.filter((data) => {
        return data.id !== id;
      })
    );
  };
  function onSwitch(e) {
    setDatasrc(
      datasrc.filter((data) => {
        if (data.id == e) {
          if (data.archived == false) {
            data.archived = true;
          } else {
            data.archived = false;
          }
        }
        return datasrc;
      })
    );
  }
  const addNote = (data) => {
    setUpdate((update) => {
      update = true;
      datasrc.push(data);
      return { datasrc, update };
    });
    return update == false;
  };

  function nothingFalse() {
    const checkx = datasrc.map((item) => {
      if (item.archived == false) {
        return item;
      }
    });
    const cleararr = checkx.filter((item) => {
      return item != undefined;
    });
    const checkdata = cleararr.filter((item) => {
      if (item.title.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });

    if (checkdata.length == 0 && cleararr.length == cleararr.length) {
      return (
        <div>
          <h2> Catatan tidak ditemukan</h2>
        </div>
      );
    }
  }
  function nothingTrue() {
    const checkx = datasrc.map((item) => {
      if (item.archived == true) {
        return item;
      }
    });
    const cleararr = checkx.filter((item) => {
      return item != undefined;
    });
    const checkdata = cleararr.filter((item) => {
      if (item.title.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });

    if (checkdata.length == 0 && cleararr.length == cleararr.length) {
      return (
        <div>
          <h2> Catatan tidak ditemukan</h2>
        </div>
      );
    }
  }

  return (
    <>
      <Header find={searchText} search={search} />
      <Createnewnote srcNote={datasrc} addNote={addNote} />
      <div className="container">
        <h3>Catatan</h3>

        <div className="konten-mod">
          {datasrc
            .filter((item) => {
              if (search == '') {
                return item;
              } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                return item;
              }
            })
            .map((item, key) => {
              if (item.archived == false) {
                return (
                  <div key={key}>
                    <Card onSwitch={onSwitch} rmvCard={rmvCard} item={item} />
                  </div>
                );
              }
            })}
        </div>
        <div>{nothingFalse()}</div>

        <h3>Arsip</h3>
        <div className="konten-mod">
          {datasrc
            .filter((item) => {
              if (search == '') {
                return item;
              } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                return item;
              }
            })
            .map((item, key) => {
              if (item.archived == true) {
                return (
                  <div key={key}>
                    <Card onSwitch={onSwitch} rmvCard={rmvCard} item={item} />
                  </div>
                );
              }
            })}
        </div>
        <div>{nothingTrue()}</div>
      </div>
    </>
  );
}

export default Konten;
