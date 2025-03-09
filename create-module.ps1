param (
    [string]$name
)

# Hàm chuyển PascalCase hoặc camelCase thành kebab-case
function ConvertTo-KebabCase {
    param ([string]$inputString)
    return ($inputString -creplace '([a-z])([A-Z])', '$1-$2').ToLower()
}

# Chuyển đổi tên thành kebab-case
$kebabName = ConvertTo-KebabCase -inputString $name

# Lấy đường dẫn hiện tại và nối với 'src/apps/modules'
$basePath = Join-Path -Path (Get-Location) -ChildPath "src/apps/modules"

# Tạo đường dẫn đầy đủ cho module
$fullPath = Join-Path -Path $basePath -ChildPath $kebabName

# Tạo thư mục nếu chưa tồn tại
New-Item -ItemType Directory -Path $fullPath -Force

# Tạo các file trong thư mục (đặt tên theo kebab-case)
New-Item -ItemType File -Path "$fullPath\$kebabName.controller.ts" -Force
New-Item -ItemType File -Path "$fullPath\$kebabName.service.ts" -Force
New-Item -ItemType File -Path "$fullPath\$kebabName.model.ts" -Force
New-Item -ItemType File -Path "$fullPath\$kebabName.entity.ts" -Force
New-Item -ItemType File -Path "$fullPath\index.ts" -Force

# Nội dung cho $name.model.ts
$modelContent = @"
import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { $name } from './$kebabName.entity'; 

export class ${name}Model extends GeneralModel<$name> {
    constructor() {
        super('$name'); 
    }
}
"@

# Ghi nội dung vào file model.ts
$modelFilePath = "$fullPath\$kebabName.model.ts"
$modelContent | Out-File -FilePath $modelFilePath -Encoding utf8

# Nội dung cho service.ts
$serviceContent = @"
import { GeneralService } from '../general';
import { $name } from './$kebabName.entity';
import { ${name}Model } from './$kebabName.model';

export class ${name}Service extends GeneralService<$name> {
    constructor() {
        super(new ${name}Model());
    }
}
"@

# Ghi nội dung vào file service.ts
$serviceFilePath = "$fullPath\$kebabName.service.ts"
$serviceContent | Out-File -FilePath $serviceFilePath -Encoding utf8

# Nội dung cho controller.ts
$controllerContent = @"
import { GeneralController } from '../general';
import { $name } from './$kebabName.entity';
import { ${name}Service } from './$kebabName.service';

export class ${name}Controller extends GeneralController<$name> {
    constructor() {
        super(new ${name}Service());
    }
}
"@

# Ghi nội dung vào file controller.ts
$controllerFilePath = "$fullPath\$kebabName.controller.ts"
$controllerContent | Out-File -FilePath $controllerFilePath -Encoding utf8



# Nội dung cho index.ts
$indexContent = @"
export * from './$kebabName.controller';
export * from './$kebabName.service';
"@

# Ghi nội dung vào file index.ts
$indexFilePath = "$fullPath\index.ts"
$indexContent | Out-File -FilePath $indexFilePath -Encoding utf8

Write-Output "Đã tạo thư mục '$kebabName' và các file trong: $fullPath"
