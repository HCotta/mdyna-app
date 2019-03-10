const ACTION_TYPES = {
  TOGGLE_WHITE_MODE: 'TOGGLE_WHITE_MODE',
  CARD_EDITOR: {
    ON_CHANGE: 'CARD_EDITOR_CHANGE',
    TOGGLE_EDITOR: 'TOGGLE_EDITOR',
    EDIT_CARD: 'EDIT_CARD',
  },
  NOTE: {
    ADD_NOTE: 'ADD_NOTE',
    SAVE_NOTE: 'SAVE_NOTE',
    REMOVE_NOTE: 'REMOVE_NOTE',
    TOGGLE_NOTE: 'TOGGLE_NOTE',
    GENERATE_LINK: 'GENERATE_NOTE_LINK',
  },
  CARD: {
    ADD_CARD: 'ADD_CARD',
    SAVE_CARD: 'SAVE_CARD',
    EDIT_CARD: 'EDIT_CARD',
    REMOVE_CARD: 'REMOVE_CARD',
    TOGGLE_CARD: 'TOGGLE_CARD',
    COMPLETE_CARD: 'COMPLETE_CARD',
    SNOOZE_CARD: 'SNOOZE_CARD',
    FAIL_CARD: 'FAIL_CARD',
    GENERATE_LINK: 'GENERATE_NOTE_LINK',
  },
  LABEL: {
    ADD_LABEL: 'ADD_LABEL',
    REMOVE_LABEL: 'REMOVE_LABEL',
  },
  TASK: {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    COMPLETE_TASK: 'COMPLETE_TASK',
    SAVE_TASK: 'SAVE_TASK',
    SNOOZE_TASK: 'SNOOZE_TASK',
    FAIL_TASK: 'FAIL_TASK',
  },
  FILTERS: {
    SEARCH_CARDS: 'SEARCH_CARDS',
    TOGGLE_COMPLETED_FILTER: 'TOGGLE_COMPLETED_FILTER',
    ADD_LABEL_FILTER: 'ADD_LABEL_FILTER',
    REMOVE_LABEL_FILTER: 'REMOVE_LABEL_FILTER',
  },
};

export default ACTION_TYPES;