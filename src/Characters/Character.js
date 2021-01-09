import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { getCharacter } from "../Redux/actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Character(props) {
  const { name, url, character, loading } = props;

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log(character);
    props.getCharacter(url);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <>
      {loading ? (
        <></>
      ) : (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{character.name}</h2>
          <h2>Abilities </h2>
          {character.abilities ? (
            <>
              {character.abilities.map((ability) => (
                <p>{ability.ability.name}</p>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );

  return (
    <div>
      <Alert onClick={handleOpen} severity="success">
        {name}
      </Alert>
      <br />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    character: state.character,
    characters: state.characters,
    loading: state.loading
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCharacter: (id) => {
      dispatch(getCharacter(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
