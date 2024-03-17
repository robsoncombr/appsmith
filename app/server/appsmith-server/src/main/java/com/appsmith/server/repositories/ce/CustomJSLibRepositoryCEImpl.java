package com.appsmith.server.repositories.ce;

import com.appsmith.server.domains.CustomJSLib;
import com.appsmith.server.dtos.CustomJSLibContextDTO;
import com.appsmith.server.helpers.ce.bridge.Bridge;
import com.appsmith.server.repositories.BaseAppsmithRepositoryImpl;
import com.appsmith.server.repositories.CacheableRepositoryHelper;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

public class CustomJSLibRepositoryCEImpl extends BaseAppsmithRepositoryImpl<CustomJSLib>
        implements CustomJSLibRepositoryCE {

    public CustomJSLibRepositoryCEImpl(CacheableRepositoryHelper cacheableRepositoryHelper) {
        super(cacheableRepositoryHelper);
    }

    @Override
    public Optional<CustomJSLib> findUniqueCustomJsLib(CustomJSLib customJSLib) {
        return queryBuilder()
                .criteria(Bridge.equal(CustomJSLib.Fields.uidString, customJSLib.getUidString()))
                .one();
    }

    @Override
    public List<CustomJSLib> findCustomJsLibsInContext(Set<CustomJSLibContextDTO> customJSLibContextDTOS) {

        Set<String> uidStrings = customJSLibContextDTOS.stream()
                .map(CustomJSLibContextDTO::getUidString)
                .collect(Collectors.toSet());

        return queryBuilder()
                .criteria(Bridge.in(CustomJSLib.Fields.uidString, uidStrings))
                .all();
    }
}
