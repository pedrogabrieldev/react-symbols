import IconSchemaFill0Wght100Grad0Opsz48 from '../components/SchemaFill0Wght100Grad0Opsz48'
import IconSchemaFill0Wght200Grad0Opsz48 from '../components/SchemaFill0Wght200Grad0Opsz48'
import IconSchemaFill0Wght300Grad0Opsz48 from '../components/SchemaFill0Wght300Grad0Opsz48'
import IconSchemaFill0Wght400Grad0Opsz48 from '../components/SchemaFill0Wght400Grad0Opsz48'
import IconSchemaFill0Wght500Grad0Opsz48 from '../components/SchemaFill0Wght500Grad0Opsz48'
import IconSchemaFill0Wght600Grad0Opsz48 from '../components/SchemaFill0Wght600Grad0Opsz48'
import IconSchemaFill0Wght700Grad0Opsz48 from '../components/SchemaFill0Wght700Grad0Opsz48'
import IconSchemaFill1Wght100Grad0Opsz48 from '../components/SchemaFill1Wght100Grad0Opsz48'
import IconSchemaFill1Wght200Grad0Opsz48 from '../components/SchemaFill1Wght200Grad0Opsz48'
import IconSchemaFill1Wght300Grad0Opsz48 from '../components/SchemaFill1Wght300Grad0Opsz48'
import IconSchemaFill1Wght400Grad0Opsz48 from '../components/SchemaFill1Wght400Grad0Opsz48'
import IconSchemaFill1Wght500Grad0Opsz48 from '../components/SchemaFill1Wght500Grad0Opsz48'
import IconSchemaFill1Wght600Grad0Opsz48 from '../components/SchemaFill1Wght600Grad0Opsz48'
import IconSchemaFill1Wght700Grad0Opsz48 from '../components/SchemaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSchema = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSchemaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSchemaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSchemaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSchemaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSchemaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSchemaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSchemaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSchemaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSchemaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSchemaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSchemaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSchemaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSchemaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSchemaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
