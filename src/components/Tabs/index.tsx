import * as React from "react";
import TabsMui from "@mui/material/Tabs";
import TabMui from "@mui/material/Tab";
import Box from "@mui/material/Box";

type TabsItemType = {
  label: string;
  child: React.ReactNode;
};

interface TabItemProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface Props {
  children?: React.ReactNode;
  items: Array<TabsItemType>;
}

const a11yTabHeaderProps = (index: number) => ({
  id: `tab-header-${index}`,
  "aria-controls": `tab-item-${index}`,
});

const a11yTabItemProps = (index: number) => ({
  id: `tab-item-${index}`,
  "aria-labelledby": `tab-item-${index}`,
});

const TabItem: React.FC<TabItemProps> = ({ children, value, index }) => {
  const ROLE = "tab-item";
  const isShow = value === index;

  return (
    <div role={ROLE} hidden={!isShow} {...a11yTabItemProps(index)}>
      {isShow && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const Tabs: React.FC<Props> = ({ items }) => {
  const KEY_TAB = "tab-header-key";
  const KEY_TAB_ITEM = "tab-item-header-key";
  const ARIA_LABEL = "tabs-header";
  const BOX_STYLE = { borderBottom: 1, borderColor: "divider" };

  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  return (
    <Box>
      <Box sx={BOX_STYLE}>
        <TabsMui key={KEY_TAB} value={value} onChange={handleChange} aria-label={ARIA_LABEL}>
          {items.map((item, index) => (
            <TabMui key={`${KEY_TAB_ITEM}-${index}`} label={item.label} {...a11yTabHeaderProps(index)} />
          ))}
        </TabsMui>
      </Box>

      {items.map((item, index) => (
        <TabItem value={value} index={index}>
          {item.child}
        </TabItem>
      ))}
    </Box>
  );
};

export default Tabs;
