import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import {Grid, Tabs, Tab} from '@mui/material';
import MessageInput from './MessageInput';
import { useTranslation } from 'react-i18next';
import MessagesTab from './MessagesTab';
import {AntmediaContext} from "../App";
import QuestionAnswerInput from "./QuestionAnswerInput";
import QuestionsTab from "./QuestionsTab";

const AntDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent',
  },
  '& .MuiPaper-root': {
    padding: 12,
    backgroundColor: 'transparent',
    boxShadow: 'unset',
    width: "30vw",
    border: 'unset',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: 0,
      backgroundColor: theme.palette.green70,
    },
  },
}));

const MessageGrid = styled(Grid)(({ theme }) => ({
  position: 'relative',
  padding: 16,
  background: "#0D0D0D",
  borderRadius: 10,
}));
const TabGrid = styled(Grid)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  paddingBottom: 16,
  paddingTop: 16,
  flexWrap: 'nowrap',
}));

const MessageDrawer = React.memo(props => {
  const { messageDrawerOpen, messages, questions = [] } = props;
  const [value, setValue] = React.useState(0);
  const antmedia = React.useContext(AntmediaContext);

  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} id={`drawer-tabpanel-${index}`} aria-labelledby={`drawer-tab-${index}`} {...other} style={{ height: '100%', width: '100%' }}>
        {value === index && children}
      </div>
    );
  };

  function a11yProps(index) {
    return {
      id: `drawer-tab-${index}`,
      'aria-controls': `drawer-tabpanel-${index}`,
    };
  }

return (
        <AntDrawer transitionDuration={200} anchor={'right'} id="message-drawer" open={messageDrawerOpen} variant="persistent">
          <MessageGrid container direction="column" style={{ flexWrap: 'nowrap', height: '100%', overflow: 'hidden' }}>
            <Grid item container justifyContent="space-between" alignItems="center">
              <Tabs
                  TabIndicatorProps={{
                    sx: {
                      display: 'none',
                    },
                  }}
                  value={value}
                  onChange={handleChange}
                  aria-label="messages and participant tabs"
              >
                <Tab disableRipple sx={{ color: '#ffffff80', p: 1, pl: 0 }} label={t('Chat')} {...a11yProps(0)} />
                <Tab disableRipple sx={{ color: '#ffffff80', p: 1, pl: 0 }} label={t('Poll')} {...a11yProps(0)} />
                <Tab disableRipple sx={{ color: '#ffffff80', p: 1, pl: 0 }} label={t('Q&A')} {...a11yProps(0)} />
              </Tabs>
            </Grid>
            <Grid item container justifyContent="space-between" alignItems="center" style={{ flex: '1 1 auto', overflowY: 'hidden' }}>
              <TabPanel value={value} index={0}>
                <TabGrid container sx={{ pb: 0 }} direction={'column'}>
                  <MessagesTab messages={messages}/>
                </TabGrid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TabGrid container sx={{ pb: 0 }} direction={'column'}>
                  <MessagesTab messages={[]}/>
                </TabGrid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <TabGrid container sx={{ pb: 0 }} direction={'column'}>
                  <QuestionsTab questions={questions}/>
                </TabGrid>
              </TabPanel>
            </Grid>

            {value === 0 ? <MessageInput /> : null}
            {value === 1 ? "There is no poll right now." : null}
            {value === 2 ? <QuestionAnswerInput /> : null}
          </MessageGrid>
        </AntDrawer>
    );
});
export default MessageDrawer;
