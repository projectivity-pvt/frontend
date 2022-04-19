import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from "React";


export const ProuctProjectTabs = () => (
    <Tabs>
        <TabList>
            <Tab>Ongoing Projects</Tab>
            <Tab>Finished Projects</Tab>
            <Tab>All Projects</Tab>
        </TabList>

        <TabPanel>
            <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content 3</h2>
        </TabPanel>
    </Tabs>
);