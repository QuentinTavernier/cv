import PropTypes from "prop-types";

import {useTranslation} from "react-i18next";
import {Divider, List, ListItem} from "@mui/material";

import {IconComponent} from "./IconComponent";

import {useTheme} from "../context/ThemeProvider";

export const ListComponent = (props) => {
    const {items} = props
    const {t} = useTranslation();
    const {darkMode} = useTheme();

    const styles = {
        list: {
            width: '100%',
            padding: 0
        },
        divider: {
            borderColor: darkMode ? "white" : "var(--color-blue)"
        },
        listItem: {
            padding : "1rem 0"
        }
    };

    return (
        <List sx={styles.list}>
            {items?.map((item, index) => (
                <div key={item.toString()}>
                    {index !== 0 &&
                        <Divider component="li" sx={styles.divider}/>
                    }
                    <ListItem style={styles.listItem} className="flex center-center gap-2 p-0">
                        <IconComponent
                            icon="radio_button_checked"
                            size="small"
                            color="purple"
                        />
                        <p className="p-text">
                            {t(item)}
                        </p>
                    </ListItem>
                </div>
            ))}
        </List>
    )
}

ListComponent.propTypes = {
    items: PropTypes.array.isRequired
}
