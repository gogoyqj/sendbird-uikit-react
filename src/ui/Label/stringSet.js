const getStringSet = (lang = 'en') => {
  const stringSet = {
    en: {
      OPEN_CHANNEL_SETTINGS__OPERATOR_TITLE: 'Channel Information',
      OPEN_CHANNEL_SETTINGS__OPERATOR_URL: 'URL',
      OPEN_CHANNEL_SETTINGS__PARTICIPANTS_ACCORDION_TITLE: 'Participants',
      OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_PANEL: 'Delete channel',
      OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_TITLE: 'Delete this channel',
      OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_SUBMIT: 'Delete',
      OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE: 'Participants',
      OPEN_CHANNEL_SETTINGS__EMPTY_LIST: 'No participants yet',
      OPEN_CHANNEL_SETTINGS__SEE_ALL: 'See all participants',
      OPEN_CHANNEL_SETTINGS__ALL_PARTICIPANTS_TITLE: 'All participants',
      OPEN_CHANNEL_SETTINGS__NO_TITLE: '(No title)',
      OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS: 'participants',
      TRYING_TO_CONNECT: 'Trying to connect…',
      USER_PROFILE__MESSAGE: 'Message',
      USER_PROFILE__USER_ID: 'User ID',
      EDIT_PROFILE__TITLE: 'My profile',
      EDIT_PROFILE__IMAGE_LABEL: 'Profile image',
      EDIT_PROFILE__IMAGE_UPLOAD: 'Upload',
      EDIT_PROFILE__NICKNAME_LABEL: 'Nickname',
      EDIT_PROFILE__NICKNAME_PLACEHOLDER: 'Enter your nickname',
      EDIT_PROFILE__USERID_LABEL: 'User ID',
      EDIT_PROFILE__THEME_LABEL: 'Dark theme',
      CHANNEL__MESSAGE_INPUT__PLACE_HOLDER: 'Enter message',
      CHANNEL__MESSAGE_INPUT__PLACE_HOLDER__DISABLED: 'Chat is unavailable in this channel',
      CHANNEL__MESSAGE_INPUT__PLACE_HOLDER__MUTED: 'Chat is unavailable because you are being muted',
      CHANNEL__MESSAGE_LIST__NOTIFICATION__NEW_MESSAGE: 'new message(s) since',
      CHANNEL__MESSAGE_LIST__NOTIFICATION__ON: 'on',
      CHANNEL_SETTING__HEADER__TITLE: 'Channel information',
      CHANNEL_SETTING__PROFILE__EDIT: 'Edit',
      CHANNEL_SETTING__MEMBERS__TITLE: 'Members',
      CHANNEL_SETTING__MEMBERS__SEE_ALL_MEMBERS: 'All members',
      CHANNEL_SETTING__MEMBERS__INVITE_MEMBER: 'Invite users',
      CHANNEL_SETTING__LEAVE_CHANNEL__TITLE: 'Leave channel',
      CHANNEL_SETTING__OPERATORS__TITLE: 'Operators',
      CHANNEL_SETTING__OPERATORS__TITLE_ALL: 'All operators',
      CHANNEL_SETTING__OPERATORS__TITLE_ADD: 'Add operator',
      CHANNEL_SETTING__MUTED_MEMBERS__TITLE: 'Muted members',
      CHANNEL_SETTING__BANNED_MEMBERS__TITLE: 'Banned members',
      CHANNEL_SETTING__FREEZE_CHANNEL: 'Freeze Channel',
      BUTTON__CANCEL: 'Cancel',
      BUTTON__DELETE: 'Delete',
      BUTTON__SAVE: 'Save',
      BUTTON__CREATE: 'Create',
      BUTTON__INVITE: 'Invite',
      BADGE__OVER: '+',
      MODAL__DELETE_MESSAGE__TITLE: 'Delete this message?',
      MODAL__CHANNEL_INFORMATION__TITLE: 'Edit channel information',
      MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE: 'Channel image',
      MODAL__CHANNEL_INFORMATION__UPLOAD: 'Upload',
      MODAL__CHANNEL_INFORMATION__CHANNEL_NAME: 'Channel name',
      MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER: 'Enter name',
      MODAL__INVITE_MEMBER__TITLE: 'Invite member',
      MODAL__INVITE_MEMBER__SELECTEC: 'selected',
      MODAL__CHOOSE_CHANNEL_TYPE__TITLE: 'New channel',
      MODAL__CHOOSE_CHANNEL_TYPE__GROUP: 'Group',
      MODAL__CHOOSE_CHANNEL_TYPE__SUPER_GROUP: 'Super group',
      MODAL__CHOOSE_CHANNEL_TYPE__BROADCAST: 'Broadcast',
      MODAL__CREATE_CHANNEL__TITLE: 'New channel',
      MODAL__CREATE_CHANNEL__SELECTED: 'selected',
      TYPING_INDICATOR__IS_TYPING: 'is typing...',
      TYPING_INDICATOR__AND: 'and',
      TYPING_INDICATOR__ARE_TYPING: 'are typing...',
      TYPING_INDICATOR__MULTIPLE_TYPING: 'Several people are typing...',
      CHANNEL_FROZEN: 'Channel frozen',
      PLACE_HOLDER__NO_CHANNEL: 'No channels',
      PLACE_HOLDER__WRONG: 'Something went wrong',
      PLACE_HOLDER__RETRY_TO_CONNECT: 'Retry',
      PLACE_HOLDER__NO_MESSAGES: 'No messages',
      NO_TITLE: 'No title',
      NO_NAME: '(No name)',
      NO_MEMBERS: '(No members)',
      TOOLTIP__AND_YOU: ', and you',
      TOOLTIP__YOU: 'you',
      YOU: ' (You)',
      TOOLTIP__UNKNOWN_USER: '(no name)',
      UNKNOWN__UNKNOWN_MESSAGE_TYPE: '(Unknown message type)',
      UNKNOWN__CANNOT_READ_MESSAGE: 'Cannot read this message.',
      MESSAGE_EDITED: '(edited)',
      MESSAGE_MENU__COPY: 'Copy',
      MESSAGE_MENU__REPLY: 'Reply',
      MESSAGE_MENU__EDIT: 'Edit',
      MESSAGE_MENU__RESEND: 'Resend',
      MESSAGE_MENU__DELETE: 'Delete',
      SEARCH: 'Search',
      SEARCH_IN_CHANNEL: 'Search in channel',
      SEARCH_IN: 'Search in',
      SEARCHING: 'Searching for messages...',
      NO_SEARCHED_MESSAGE: 'No results found.',
      REPLYING_ATTACHMENT__REPLY_TO: 'Reply to',
      REPLYING_ATTACHMENT__FILE_TYPE__IMAGE: 'Photo',
      REPLYING_ATTACHMENT__FILE_TYPE__GIF: 'GIF',
      REPLYING_ATTACHMENT__FILE_TYPE__VIDEO: 'Video',
      REPLIED_TO: 'replied to',
      // FIXME: get back legacy, remove after refactoring open channel messages
      CONTEXT_MENU_DROPDOWN__COPY: 'Copy',
      CONTEXT_MENU_DROPDOWN__EDIT: 'Edit',
      CONTEXT_MENU_DROPDOWN__RESEND: 'Resend',
      CONTEXT_MENU_DROPDOWN__DELETE: 'Delete',
    },
  };
  return stringSet[lang];
};

export default getStringSet;
