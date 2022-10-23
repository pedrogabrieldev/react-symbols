import IconToolsPliersWireStripperFill0Wght100Grad0Opsz48 from '../components/ToolsPliersWireStripperFill0Wght100Grad0Opsz48'
import IconToolsPliersWireStripperFill0Wght200Grad0Opsz48 from '../components/ToolsPliersWireStripperFill0Wght200Grad0Opsz48'
import IconToolsPliersWireStripperFill0Wght300Grad0Opsz48 from '../components/ToolsPliersWireStripperFill0Wght300Grad0Opsz48'
import IconToolsPliersWireStripperFill0Wght400Grad0Opsz48 from '../components/ToolsPliersWireStripperFill0Wght400Grad0Opsz48'
import IconToolsPliersWireStripperFill0Wght500Grad0Opsz48 from '../components/ToolsPliersWireStripperFill0Wght500Grad0Opsz48'
import IconToolsPliersWireStripperFill0Wght600Grad0Opsz48 from '../components/ToolsPliersWireStripperFill0Wght600Grad0Opsz48'
import IconToolsPliersWireStripperFill0Wght700Grad0Opsz48 from '../components/ToolsPliersWireStripperFill0Wght700Grad0Opsz48'
import IconToolsPliersWireStripperFill1Wght100Grad0Opsz48 from '../components/ToolsPliersWireStripperFill1Wght100Grad0Opsz48'
import IconToolsPliersWireStripperFill1Wght200Grad0Opsz48 from '../components/ToolsPliersWireStripperFill1Wght200Grad0Opsz48'
import IconToolsPliersWireStripperFill1Wght300Grad0Opsz48 from '../components/ToolsPliersWireStripperFill1Wght300Grad0Opsz48'
import IconToolsPliersWireStripperFill1Wght400Grad0Opsz48 from '../components/ToolsPliersWireStripperFill1Wght400Grad0Opsz48'
import IconToolsPliersWireStripperFill1Wght500Grad0Opsz48 from '../components/ToolsPliersWireStripperFill1Wght500Grad0Opsz48'
import IconToolsPliersWireStripperFill1Wght600Grad0Opsz48 from '../components/ToolsPliersWireStripperFill1Wght600Grad0Opsz48'
import IconToolsPliersWireStripperFill1Wght700Grad0Opsz48 from '../components/ToolsPliersWireStripperFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToolsPliersWireStripper = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToolsPliersWireStripperFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToolsPliersWireStripperFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToolsPliersWireStripperFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToolsPliersWireStripperFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToolsPliersWireStripperFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToolsPliersWireStripperFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToolsPliersWireStripperFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToolsPliersWireStripperFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToolsPliersWireStripperFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToolsPliersWireStripperFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToolsPliersWireStripperFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToolsPliersWireStripperFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToolsPliersWireStripperFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToolsPliersWireStripperFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
