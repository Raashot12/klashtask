import { Tooltip } from '@mantine/core';
import { TooltipBaseProps } from '@mantine/core/lib/Tooltip/Tooltip.types';
import IconInfoTip from 'components/IconComponents/IconInfoTip';

const InfoTip = (props: Omit<TooltipBaseProps, 'children'>) => {
  return (
    <Tooltip {...props} multiline withArrow color="brand" label={props.label}>
      <div>
        <IconInfoTip />
      </div>
    </Tooltip>
  );
};

export default InfoTip;
