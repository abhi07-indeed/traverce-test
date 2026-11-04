"use client";

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/components/ui/combobox";
const endpoints = [
  {
    value: "Floor 1",
    items: ["Library", "CR-101", "CR-102", "CR-103", "CR-104"],
  },
  {
    value: "Floor 2",
    items: ["LAB-201", "LAB-202", "CR-201", "CR-202", "CR-203", "CR-204"],
  },
];

export default function ComboBoxTest() {
  return (
    <Combobox items={endpoints}>
      <ComboboxInput placeholder="Select an endpoint" showClear />
      <ComboboxContent className={"bg-secondary"}>
        <ComboboxEmpty>Endpoint not found.</ComboboxEmpty>
        <ComboboxList>
          {(group, index) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < endpoints.length - 1 && <ComboboxSeparator />}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
