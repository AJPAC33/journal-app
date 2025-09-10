import { IconButton, Typography } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <>
      <JournalLayout>
        {/* <Typography>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography> */}
        {!!active ? <NoteView /> : <NothingSelectedView />}
        {/* <NothingSelectedView /> */}
        {/* <NoteView /> */}
        <IconButton
          onClick={onClickNewNote}
          style={{ display: isSaving ? "none" : "" }}
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  );
};
